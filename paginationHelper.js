/**
 *https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript
 *
 */
// TODO: complete this object/class
let collection;
let itemsPerPage;
// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;

}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length/this.itemsPerPage)
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  let numberOfPages = Math.ceil(this.collection.length/this.itemsPerPage);
  if(pageIndex > numberOfPages-1){
    return -1
  }else{
    let count = pageIndex ===  numberOfPages-1 ? this.collection.length%this.itemsPerPage : this.itemsPerPage
    return count
  }
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if(itemIndex < this.collection.length && itemIndex >= 0){
    let index = itemIndex === 0 ? 1 : itemIndex;
    let pageCount = 0;
    for(let i = this.itemsPerPage; i<=index*this.itemsPerPage; i+=this.itemsPerPage){
      if(i >= itemIndex){
        return pageCount
      }else{
        pageCount +=1
      }
    }
  }else{
    return -1
  }
}