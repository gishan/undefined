import { Component, OnInit } from '@angular/core';
import { of, BehaviorSubject } from 'rxjs';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

export class FileNode {
  children: FileNode[];
  name: string | 'map' | 'array' | 'string' | 'number' | 'basic';
  type: string;
  level: number | 1 | 2 | 3;
}

export interface Header {
  name: string;
}

@Component({
  selector: 'app-csv-uploader',
  templateUrl: './csv-uploader.component.html',
  styleUrls: ['./csv-uploader.component.scss']
})
export class CsvUploaderComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  headers: Header[] = [];

  dataSource = [
    {
      name: '',
      type: 'basic',
      level: 1,
      children: []
    }
  ];

  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;
  dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);

  constructor() {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this.getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    this.dataChange.subscribe(data => (this.nestedDataSource.data = data));

    this.dataChange.next(this.dataSource);
  }

  ngOnInit() {}

  private getChildren = (node: FileNode) => {
    return of(node.children);
  }

  hasNestedChild = (_: number, nodeData: FileNode) => {
    return nodeData.type === 'map' || nodeData.type === 'array';
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.headers.push({ name: value.trim() });
    }

    if (input) {
      input.value = '';
    }
  }

  remove(header: Header): void {
    const index = this.headers.indexOf(header);

    if (index >= 0) {
      this.headers.splice(index, 1);
    }
  }

  addnew(node: FileNode, name: string, type: string) {
    if (node && name && type) {
      console.log(node, name, type);

      if (node.level === 1) {
        if (type === 'number' || type === 'string') {
          this.dataSource.push({
            name: '',
            type: 'basic',
            level: node.level,
            children: []
          });
        } else {
          this.dataSource.push({
            name: '',
            type: 'basic',
            level: node.level,
            children: []
          });
          this.dataSource.push({
            name,
            type,
            level: node.level,
            children: [
              {
                name: '',
                type: 'basic',
                level: node.level + 1,
                children: []
              }
            ]
          });
        }
      } else {
        if (type === 'number' || type === 'string') {
          node.children.push({
            name,
            type,
            level: node.level,
            children: []
          });
        } else {
          node.children.push({
            name,
            type,
            level: node.level,
            children: [
              {
                name: '',
                type: 'basic',
                level: node.level + 1,
                children: []
              }
            ]
          });
        }
      }

      this.dataChange.next(this.dataSource);
    }
  }

  generate() {
    console.log(this.dataSource);
  }
}
