import { TopBar } from './top-bar.po';
import {} from 'jasmine';

describe('top-bar', function() {
    let bar: TopBar;

    beforeEach(() => {
        bar = new TopBar();
    });

    it('should navigate to the products page', () => {
        runChecks('Products', 'Products', 'products');
    });

    it('should navigate to the wide-format page', () => {
        runChecks('Wide-Format', 'Signs and Banners', 'wide-format');
    });

    it('should navigate to the specialty printing page', () => {
        runChecks('Specialty Printing', 'Specialty Printing', 'specialty-printing');
    });

    it('should navigate to the photographs page', () => {
        runChecks('Photographs', 'Lab-Quality Photographs', 'photographs');
    });

    it('should navigate to the bindery page', () => {
        runChecks('Bindery', 'Bindery and Finishing', 'bindery');
    });

    function runChecks(link: string, title: string, url: string) {
        bar.start();
        bar.navigateTo(link);
        expect(bar.getHeader()).toEqual(title);
        expect(bar.getTitle()).toContain(title);
        expect(bar.getURL()).toContain(url);
    }
});
