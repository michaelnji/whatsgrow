<script>
  // @ts-nocheck

  import { Chart } from 'frappe-charts/dist/frappe-charts.min.esm';
  import { onMount } from 'svelte';
  import { v4 as uuidv4 } from 'uuid';
  export let data, type, title, color, height;
  let chart, id, pid;

  id = uuidv4();
  pid = uuidv4();
  let node1, node2, ready;
  onMount(() => {
    ready = true;
    node2 = document.querySelector(`#chart-${id}`);
    chart = new Chart(`#chart-${id}`, {
      title: title,
      data: data,
      type: type, // or 'bar', 'line', 'scatter', 'pie', 'percentage'
      height: height ? height : 250,
      colors: [color]
    });
  });
  function createEl(el) {
    return document.createElement(el);
  }
  function queryEl(el) {
    if (ready) {
      return document.querySelector(el);
    }
  }
  $: {
    node2 = queryEl(`#chart-${id}`);
    let p = queryEl(`#parent-` + pid);
    if (data && node2 && p) {
      node2 = queryEl(`#chart-${id}`);

      node1 = createEl('div');
      id = uuidv4();
      node1.id = 'chart-' + id;

      p.replaceChild(node1, node2);
      chart = new Chart(`#chart-${id}`, {
        title: title,
        data: data,
        type: type,
        height: height ? height : 250,
        colors: [color]
      });
    }
  }
</script>

<div id={`parent-${pid}`}><div id={`chart-${id}`} /></div>

<style>
</style>
