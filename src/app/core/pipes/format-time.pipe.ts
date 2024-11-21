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
        const hours = date.getHours();
        const minutes = this.padZero(date.getMinutes());
        const ampm = hours >= 12 ? 'pm' : 'am';
        const formattedHours = hours % 12 || 12;

        return `${day}-${month}-${year} ${formattedHours}:${minutes} ${ampm}`;
    }

    private padZero(num: number): string {
        return num < 10 ? '0' + num : num.toString();
    }
}