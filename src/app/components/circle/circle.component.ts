import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
})
export class CircleComponent implements OnInit {
  labels: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
  ];
  nElements: number;
  circleRadius: number = 350;
  itemRadius: number = 20;
  angleDiff: number;
  selectedLabelIndex: number = null;

  constructor() {
    this.nElements = this.labels.length;
    this.angleDiff = (2 * Math.PI) / this.nElements;
  }

  ngOnInit() {}

  translateElementPX(n: number): string {
    let xPos = this.circleRadius * Math.cos(n * this.angleDiff) - 75;
    let yPos = -this.circleRadius * Math.sin(n * this.angleDiff) - 75;

    return `${xPos}px, ${yPos}px`;
  }

  getCircleDiameterPX(): string {
    return 2 * this.circleRadius + 'px';
  }
  getItemDiameterPX(): string {
    return 2 * this.itemRadius + 'px';
  }

  changeSelectedLabel(n: number) {
    this.selectedLabelIndex = n;
  }

  boxContent(n: number): string {
    if (n !== null) {
      return this.translateElementPX(n);
    }
  }
}
