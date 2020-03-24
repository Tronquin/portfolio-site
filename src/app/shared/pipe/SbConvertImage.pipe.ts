import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "sbConvertImage" })
export class SbConvertImage implements PipeTransform {
  transform(image: string, format: string): string {
    const regex = new RegExp("(https):/{2}");
    const path: string = regex.test(image)
      ? image.replace("https://a.storyblok.com", "")
      : image.replace("//a.storyblok.com", "");
    const imageService: string = "https://img2.storyblok.com/";
    const convertToWebp: string = `filters:format(${format})`;
    return `${imageService}${convertToWebp}${path}`;
  }
}
