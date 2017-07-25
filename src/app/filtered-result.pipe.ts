import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteredResult'
})
export class FilteredResultPipe implements PipeTransform {

  transform(providers: Array<any>, searchStr: string): Array<any> {
    if (searchStr) {
      return providers.filter((eachVal: any) => {
        console.log();
        return eachVal.id.toString().toLocaleLowerCase().includes(searchStr.toLocaleLowerCase()) ;
      });
    } else {
      return providers;
    }
  }

}
