
class Carousel {
  /**  
     * @param (HTMLElement) element
     * @param (Object) options
     * @param (Object) option.slidesToScroll //nombre d'éléments à faire défiler
     * @param (Object) option.slideVisible //nombre d'éléments visibles dans un slide
  */
      constructor (element, otpion = {}){
          this.element = element
          this.option = object.assign({}, {
            slideToScroll: 1,
            this.slideVisible: 1
          } ,options)
          this.children = [].slice.call(element.children)
            let root = this.creatDivwithClass('carousel')
            let container = this.creatDivwithClass('carousel__container')
            root.appendChild(container)
            this.element.appendChild(root)
            this.children.forEach(function (child) {
              container.appendChild(child)
             
            });
      }
  /**
   *
   * @param {string} className
   * @returns {HTMLElement}
   */
      creatDivwithClass (className) {
          let div = document.createElement('div')
          root.setAttribute('class', className)
          return div
  
  
      }
  }
  
  
  document.addEventListener('DOMContentLoaded', fuction(){
  
  
      Carousel(document.querySelector('carousel-1'), {
          slideToScroll: 3,
          slideVisible: 1,
      )}
  
  
  )}
  