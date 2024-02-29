import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function Automata({ rfc }) {
  
    const ref = useRef();

    useEffect(() => {
        if (rfc.length >= 4 && /^P[ORP]{3}$/i.test(rfc)) { 
            generarAutomata(rfc);
        } else {
            d3.select(ref.current).select("svg").remove();
        }
    }, [rfc]);

    const generarAutomata = (cadena) => {
        d3.select(ref.current).select("svg").remove();

        let estados = [];
        let transiciones = [];

        for (let i = 0; i <= cadena.length; i++) {
            estados.push("q" + i);
            if (i < cadena.length) {
                transiciones.push({
                    source: "q" + i,
                    target: "q" + (i + 1),
                    label: cadena[i]
                });
            }
        }

        let svg = d3.select(ref.current).append("svg")
            .attr("width", 600)
            .attr("height", 150);


        svg.selectAll("text")
            .data(estados)
            .enter().append("text")
            .attr("x", function(d, i) { return i * 80 + 40; })
            .attr("y", 85)
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "middle")
            .text(function(d) { return d; });


        svg.selectAll("text.linkLabel")
            .data(transiciones)
            .enter().append("text")
            .attr("class", "linkLabel")
            .attr("x", function(d) { return (estados.indexOf(d.source) * 80 + estados.indexOf(d.target) * 80) / 2 + 40; })
            .attr("y", 75)
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "middle")
            .text(function(d) { return d.label; });

        svg.append("polygon")
            .attr("points", function() {
                let x = 6;
                let y = 90;
                let size = 15;
                return (x) + "," + (y) + " " + (x - size / 2) + "," + (y - size) + " " + (x + size / 2) + "," + (y - size);
            })
            .attr("stroke", "black")
            .attr("stroke-width", 1)
            .attr("fill", "white")
            .attr("transform", "rotate(28, 15, 90)");

        svg.append("circle")
            .attr("cx", (estados.length - 1) * 80 + 40)
            .attr("cy", 80)
            .attr("r", 20)
            .attr("stroke", "black")
            .attr("stroke-width", 2)
            .attr("fill", "white");

        svg.append("circle")
            .attr("cx", (estados.length - 1) * 80 + 40)
            .attr("cy", 80)
            .attr("r", 16)
            .attr("stroke", "black")
            .attr("stroke-width", 2)
            .attr("fill", "white");

        svg.append("text")
            .attr("x", (estados.length - 1) * 80 + 40)
            .attr("y", 85)
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "middle")
            .text(estados[estados.length - 1]);

        svg.append("defs").append("marker")
            .attr("id", "arrowhead")
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", 8)
            .attr("refY", 0)
            .attr("markerWidth", 5)
            .attr("markerHeight", 5)
            .attr("orient", "auto")
            .append("path")
            .attr("d", "M0,-5L10,0L0,5");
    }

    return <div ref={ref}></div>;
}

export default Automata;