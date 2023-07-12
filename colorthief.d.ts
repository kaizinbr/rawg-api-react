declare module 'colorthief' {
    class ColorThief {
        getColor(image: HTMLImageElement, quality?: number): [number, number, number];
        getPalette(image: HTMLImageElement, colorCount?: number, quality?: number): [number, number, number][];
    }

    export default ColorThief;
}
// utilizado para reconhecer a biblioteca colorthief