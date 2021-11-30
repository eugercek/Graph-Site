(()=>{"use strict";class e{constructor(e=[]){this.queue=e}enqueue(e){this.queue.push(e)}dequeue(){return this.queue.shift()}isEmpty(){return 0===this.queue.length}front(){if(this.isEmpty())throw new Error("Queue is empty!");return this.queue[0]}}const s=new class{constructor(e){this.size=e,this.adjacencyList=Array.from(Array(this.size),(()=>[]))}addEdge(e,s){this.adjacencyList[e].push(s)}toString(){console.table(this.adjacencyList)}}(7),o="Adjacency List",t="Depth First Traversal";s.addEdge(0,1),s.addEdge(1,2),s.addEdge(1,5),s.addEdge(2,0),s.addEdge(2,3),s.addEdge(3,4),s.addEdge(4,0),s.addEdge(4,6),s.addEdge(5,6),console.group(o),console.dir(s.adjacencyList),console.groupEnd(o),console.group(t),function(e,s=0){const o=new Array(e.size).fill(!1),t=s=>{o[s]||(console.log(s),o[s]=!0,e.adjacencyList[s].forEach((e=>{t(e)})))};t(s)}(s),console.groupEnd(t),console.group("Prim's algorithm"),function(s,o=0){const t=new e,n=new Array(s.size).fill(!1);for(t.enqueue(o),n[o]=!0;!t.isEmpty();){const e=t.dequeue();console.log(e),s.adjacencyList[e].forEach((e=>{!1===n[e]&&(t.enqueue(e),n[e]=!0)}))}}(s),console.groupEnd("Is Cyclic?")})();