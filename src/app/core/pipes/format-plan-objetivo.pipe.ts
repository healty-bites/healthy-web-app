import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPlanObjetivo',
  standalone: true
})
export class FormatPlanObjetivoPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .replace(/_/g, ' ')
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }
}
