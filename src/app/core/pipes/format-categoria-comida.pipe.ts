import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCategoriaComida',
  standalone: true
})
export class FormatCategoriaComida implements PipeTransform {
  transform(value: string): string {
    return value
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }
}
