import React, { Component } from 'react';
import MenuButton from './MenuButton';
import Menu from './Menu';


class MenuContainer extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             visible: false
        };
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.togggleMenu = this.togggleMenu.bind(this);
    }

    handleMouseDown(e) {
        this.togggleMenu();

        console.log("clicked");
        e.stopPropagation();
    }

    togggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }
    
    render() {
        return (
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown} />
                <Menu handleMouseDown={this.handleMouseDown} 
                menuVisibility={this.state.visible} />
                <p>Can you spot the item that doesn't belong?</p>
                <ul>
                    <li>Lorem</li>
                    <li>Ipsum</li>
                    <li>Dolor</li>
                    <li>Sit</li>
                    <li>Bumblebees</li>
                    <li>Aenean</li>
                    <li>Consectetur</li>
                </ul>
            </div>
        )
    }
}

export default MenuContainer;