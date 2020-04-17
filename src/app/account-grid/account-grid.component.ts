import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-grid',
  templateUrl: './account-grid.component.html',
  styleUrls: ['./account-grid.component.scss']
})
export class AccountGridComponent implements OnInit {

  public accountList = [];
  public filteredAccountList = [];
  public sortProp: string = '';
  public sortType: string = 'desc';
  public showMore: boolean = true;
  private readonly SORT_DESC = 'desc';
  private readonly SORT_ASC = 'asc';
  private readonly size = 3;
  private from = 0;

  constructor(private accountService: AccountService) { }

  public ngOnInit(): void {
    this.accountService.getAccountsList()
      .subscribe((data: any) => {
        this.accountList = data;
        this.loadData();
    })
  }

  public loadData(): void {
    this.filteredAccountList = this.accountList.slice(0, this.from + this.size);
  }

  public loadMoreData(): void {
    this.from = this.from+this.size;
    this.filteredAccountList = this.accountList.slice(0, this.from + this.size);
    if(this.filteredAccountList.length === this.accountList.length) {
      this.showMore = false;
    } else {
      this.showMore = true;
    }
  }

  public onSort(sortProp: string): void {
    if(this.sortType === this.SORT_DESC && this.sortProp === sortProp) {
      this.sortType = this.SORT_ASC;
    }else if(this.sortProp === sortProp){
      this.sortType = this.SORT_DESC;
    } else {
      this.sortType = this.SORT_ASC;
    }
    this.sortProp = sortProp;

    if(this.sortType === this.SORT_ASC) 
      this.accountList.sort((a,b) => a[sortProp] - b[sortProp])
    if(this.sortType === this.SORT_DESC)
      this.accountList.sort((a,b) => b[sortProp] - a[sortProp])
    this.loadData();
  }

}
