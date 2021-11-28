import Graph from "./Graph";
import { dfs } from "./Algorithms";

const foo = new Graph(10);

/* eslint-disable */
foo.addEdge(0, 1);

foo.addEdge(1, 2);
foo.addEdge(1, 5);

foo.addEdge(2, 0);
foo.addEdge(2, 3);

foo.addEdge(3, 4);

foo.addEdge(4, 0);
foo.addEdge(4, 6);

foo.addEdge(5, 6);
/* eslint-enable */

foo.toString();

dfs(foo);
