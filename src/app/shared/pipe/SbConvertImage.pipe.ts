import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "sbConvertImage" })
export class SbConvertImage implements PipeTransform {
  transform(image: string, format: string): string {
    const path: string = image.replace("https://a.storyblok.com", "");
    const imageService: string = "https://img2.storyblok.com/";
    const convertToWebp: string = `filters:format(${format})`;
    return `${imageService}${convertToWebp}${path}`;
  }

  // supportsWebp(): Observable<any> {
  //   const webpData =
  //     "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
  //   return from(fetch(webpData)).pipe(
  //     flatMap(x => x.blob()),
  //     flatMap(z => createImageBitmap(z))
  //   );
  // }
}
