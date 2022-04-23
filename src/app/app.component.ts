import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

export class itens{
nome!:string
descricao!:string
valor!:number
img!:string
};
export class Pedido{
nomeCliente!:string
obs!:string
valorTotal!:number
itens!:itens[]
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'atendimento';
  
  itens:itens[]=[
    {nome:'X-Burguer',descricao:'Pão, Hamburguer e Queijo',valor:7.90,img:'assets/burguer.jpg'},
    {nome:'X-Salada',descricao:'Pão, Hamburguer, Queijo, Alface, Tomate, Picles e Maionese',valor:8.90,img:'assets/salada.jpg'},
    {nome:'X-Egg',descricao:'Pão, Hamburguer, Queijo, Cebola e Ovo',valor:9.90,img:'assets/egg.jpg'},
    {nome:'X-Chicken',descricao:'Pão, Filé de Frango , Queijo Cheddar cremoso, Alface e Cebola Roxa',valor:10.90,img:'assets/chicken.jpg'},
    {nome:'X-Bacon',descricao:'Pão, Hamburguer, Queijo, Alface, Tomate, Cebola e Bacon',valor:11.90,img:'assets/bacon.jpg'},
    {nome:'X-Tudo',descricao:'Pão, Hamburguer, Queijo, Alface, Tomate, Cebola, Bacon, Ovo, Cheddar',valor:14.90,img:'assets/tudo.jpg'},
  ]

  itemSelect:itens[] = [];
  pedidos:Pedido[] = [] 
  concluidos:Pedido[] = [] 
  concluido:Pedido = new Pedido 
  formPedido: FormGroup = new FormGroup ({

    
   nome: new FormControl('',Validators.required),
   obs: new FormControl(''),
   itens: new FormControl()
  }
  )
  valorTotal:any = 0.0

  removeItem(i: itens): void {
    const index = this.itemSelect.indexOf(i);

    if (index >= 0) {
      this.itemSelect.splice(index, 1);
    }
    this.valorTotal = this.itemSelect.map(a=>a.valor).reduce((a,b)=>{   
      a +=b
       return a
     })
  }
  additem(i: itens) {
    if (i) {
      this.itemSelect.push(i);
     
    }
    this.valorTotal = this.itemSelect.map(a=>a.valor).reduce((a,b)=>{   
      a +=b
       return a
     })
      
  }
concluiPedido(){
  var pedido = new Pedido

  pedido.nomeCliente = this.formPedido.value.nome.toUpperCase()
  pedido.obs = this.formPedido.value.obs
  pedido.valorTotal = this.valorTotal
  pedido.itens = this.itemSelect
  console.log(pedido)
this.pedidos.push(pedido)
this.itemSelect = []
this.valorTotal = 0 
this.formPedido= new FormGroup ({
  nome: new FormControl('',Validators.required),
  obs: new FormControl(''),
  itens: new FormControl()
 }
 )
console.log(this.pedidos)

}
 
concluir(i:Pedido){
this.concluido = i
this.concluidos.push(i)
const index = this.pedidos.indexOf(i);

    if (index >= 0) {
      this.pedidos.splice(index, 1);
    }
    
console.log(this.concluidos)
}
}
