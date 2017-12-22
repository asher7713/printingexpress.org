#!/bin/bash
# Delete old files from AWS and send invalidations to CF

set -ev

## Most of the script deals with variables...
if [[ $BRANCH -eq "master" ]]; then
    BUCKET=$PROD_BUCKET
    DISTRO=$PROD_CF_DISTRO
elif [[ $BRANCH -eq "develop" ]]; then
    BUCKET=$DEV_BUCKET
    DISTRO=$DEV_CF_DISTRO
else
    >&2 echo "Branch must be set to master or develop"
    exit 1
fi

test -z $BUCKET && exit 1

## Then one command to copy
aws s3 sync dist/ s3://$BUCKET/ --delete --cache-control "public, max-age=31536000, must-revalidate, no-transform"

## Send any invalidations
if [[ ! -z $DISTRO ]]; then
    # Find anything in assets that's different from the last merge into this branch
    # then strip off the word "src", as in /src/assets/ to leave /assets and reflect
    # the path in Cloudfront.
    PATHS="$(git diff --name-only --diff-filter=M HEAD...$TRAVIS_BRANCH | grep \/src\/assets | sed 's.src..g') /index.html"
    aws cloudfront create-invalidation --distribution-id $DISTRO --paths $PATHS
fi
