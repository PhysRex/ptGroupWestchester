import React, { Component } from 'react';



class ServiceBanner extends Component {
  


  handleClick = e => {
    e.preventDefault()
    console.log(e.target.innerHTML) 

    const ul = document.getElementsByClassName('services-ul')
    const categories = document.getElementsByClassName('category-item')
    console.log("-------")
    console.log(categories)
    console.log("-------")
    console.log("-------")
    console.log(categories[0].innerHTML)
    console.log("-------")
    
    let list = ''
    let selectedCategory = e.target.innerHTML

    
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].innerHTML === selectedCategory) {
        categories[i].className = 'category-item category-selected'
      } else {
        categories[i].className = 'category-item'
      }
    }


    // filters what services are displayed on right panel
    this.props.content.filter(item => {
      if (item.category == e.target.dataset['name']) {
        return item.services.map(item => {
          return list += `<li class='service-item'>${item}</li>`
        })
      }
    })

    ul[0].innerHTML = list
    
    // adds the animation class
    ul[0].classList.add('services-transition')

    // makes animation reset possible
    void ul[0].offsetWidth;

    // starts the animation after reset
    setTimeout(function () {
      ul[0].classList.remove('services-transition')
    }, 250)
     
  }

  render() {

    return (
      <div className='panels'>
        <div className='panel1'>
          {this.props.content.map(item => {
            return  <div 
                      className='category-item' 
                      data-name={item.category} 
                      onClick={this.handleClick}
                    >
                      {item.category}
                    </div>
          })}
        </div>
        <div className='panel2'>
          <div className='services-placement'>
            <ul className='services-ul'>
            </ul>
          </div>
        </div>
      </div>
    )
  }
};

export default ServiceBanner;