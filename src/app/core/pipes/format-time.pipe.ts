import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatTime',
    standalone: true
})
export class FormatTimePipe implements PipeTransform {

    transform(value: string): string {
        const date = new Date(value);
        const day = this.padZero(date.getDate());
        const month = this.padZero(date.getMonth() + 1);
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }

    private padZero(num: number): string {
        return num < 10 ? '0' + num : num.toString();
    }
}