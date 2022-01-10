import { Component, Input, OnInit } from '@angular/core';
import { Position } from '../../types/types';

@Component({
  selector: 'jv-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {
  @Input('text') text:string = "your text here";
  @Input('icon-name') iconName!:string;
  @Input('bg-color') backgroundColor:string = "black";
  @Input('border-radius') borderRadius!:string;
  @Input('padding') padding:string = ".4rem 1rem";
  @Input('margin') margin:string = "0";
  @Input('border') border:string = "none";
  @Input('icon-position') iconPosition:Position = 'left'
  @Input('width') width:string = "fit-content"

  @Input('text-color') textColor:string = "white";
  @Input('font-family') fontFamily:string = "";
  @Input('text-size') textSize:string = "16px";
  @Input('font-weight') fontWeight:string = "normal";

  @Input('icon-color') iconColor:string= "white";
  @Input('icon-size') iconSize:string = "15px";
  @Input('whit-hover-effects') whitHoverEffects:boolean = true;

  buttonStyles:Object = {};
  iconStyles: Object = {};
  textStyles: Object = {};
  hoverEffects:Object = { opacity:'.85'};

  constructor() { }

  ngOnInit(): void {
    this.buttonStyles = this.getInitialStylesButton()
    this.iconStyles = {
      color:this.iconColor, 
      fontSize:this.iconSize
    }
    this.textStyles = {
      color:this.textColor, 
      fontSize:this.textSize,
      fontWeight:this.fontWeight
    }
  }
  getInitialStylesButton() {
    return {
      width:this.width,
      backgroundColor: this.backgroundColor,
      borderRadius:this.borderRadius || null,
      padding:this.padding,
      margin:this.margin,
      border: this.border,
      transition:'opacity .3s ease',
      flexDirection: this.iconPosition ===  'left' ? 'row':'row-reverse'
    }
  }

  applyHoverEffects() {
    if(!this.whitHoverEffects)return

    this.buttonStyles = {
      ...this.buttonStyles,
      ...this.hoverEffects
        
    }
    
  }
  removeHoverEffects(){
    if(!this.whitHoverEffects)return

    this.buttonStyles = this.getInitialStylesButton()
  }
}
