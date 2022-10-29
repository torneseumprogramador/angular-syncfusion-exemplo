import { Component } from '@angular/core';
import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'syncfusion';

  teste = ()=>{
    let node: NodeModel = {
      // Position of the node
      offsetX: 250,
      offsetY: 250,
      // Size of the node
      width: 100,
      height: 100,
      style: {
        fill: 'red', strokeColor: 'blue', strokeWidth: 5,
        strokeDashArray: '2 2', opacity: 0.6,
        textAlign: 'Left'
      },
      // Text(label) added to the node
    };

    // initialize Diagram component

    let diagram: Diagram = new Diagram({
      width: '100%',
      height: '600px',
      // Add node
      nodes: [node]
    });
    // render initialized Diagram
    diagram.appendTo('#element');

    
  }

}
