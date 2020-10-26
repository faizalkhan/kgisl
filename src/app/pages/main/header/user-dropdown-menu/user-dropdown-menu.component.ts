import {
  Component,
  OnInit,
  ViewChild,
  HostListener,
  ElementRef,
  Renderer2,
} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormControl } from '@angular/forms';

interface Books {
  bookname: string,
  bookauthor: string
}

interface Status {
  value: string;
  viewValue: string;
}
export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-user-dropdown-menu',
  templateUrl: './user-dropdown-menu.component.html',
  styleUrls: ['./user-dropdown-menu.component.scss'],
})
export class UserDropdownMenuComponent implements OnInit {
  public user;


  books: Books[];
  selectedBook: string;
  
  status: Status[] = [
    {value: 'Define', viewValue: 'Steak'},
    
  ];


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  tagsaddOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {name: 'Largest Partner Echosystem'}
 
  ];


  tags = [
    
    {name: 'Data'},
    {name: 'Maps'},
    {name: 'Analytics'},
  ];




  
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  addtags(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  removetag(tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }


  close()
  {
     this.hideDropdownMenu();
  }


  @ViewChild('dropdownMenu', { static: false }) dropdownMenu;


  @HostListener('document:click', ['$event'])
  
  clickout(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.hideDropdownMenu();
    }
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
   
  ) {

    this.books = [ 
        {bookname: "Book1", bookauthor: 'Author1'},
        {bookname: "Book2", bookauthor: 'Author2'}
    ];






  }


  options = [
    { value: '1', label: 'Ready to develop' },
    { value: '2', label: 'Requirement gathering' },
    { value: '3', label: 'Wireframe Completed' },
  ];
  
  interaction = [
    { value: '1', label: 'send' },
    { value: '2', label: 'later' },
   
  ];
 progress = [
    { value: '1', label: 'Enter Manually' }
  
   
  ];
  notifies = [
    { value: '1', label: 'Notify Watchers' }
  
   
  ];

  userimages = [
    { name: 'john', userprofile: 'user1-128x128.jpg' },
    { name: 'robert', userprofile: 'user8-128x128.jpg' },
    { name: 'robert', userprofile: 'user6-128x128.jpg' },
    { name: 'William', userprofile: 'user1-128x128.jpg' }
  
  ];

  date = new FormControl(new Date());
  picker = new FormControl((new Date()).toISOString());

  ngOnInit(): void {
    
  }

  toggleDropdownMenu() {
    if (this.dropdownMenu.nativeElement.classList.contains('show')) {
      this.hideDropdownMenu();
    } else {
      this.showDropdownMenu();
    }
  }

  showDropdownMenu() {
    this.renderer.addClass(this.dropdownMenu.nativeElement, 'show');
  }

  hideDropdownMenu() {
    this.renderer.removeClass(this.dropdownMenu.nativeElement, 'show');
  }

 
}
