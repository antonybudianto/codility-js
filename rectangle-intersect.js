function Rect(bot, left, top, right) {
  this.bot = bot;
  this.left = left;
  this.top = top;
  this.right = right;
  
  this.intersect = (rect) => {
   let left = Math.max(this.left, rect.left);
   let right = Math.min(this.right, rect.right);
   let bot = Math.max(this.bot, rect.bot);
   let top = Math.min(this.top, rect.top);
   
   if (left < right && bot < top) {
      let intersectArea = (right-left) * (top-bot);
      return this.area() + rect.area() - intersectArea;
   }
   
   return -1;
  }

  this.area = () => (right - left) * (top - bot);
}
