<script>
  export let termekek
</script>

<h1>Kosár</h1>
<hr>
{#each termekek as i}
  <b>{i.nev} </b>{i.ar}ft - {i.db} db
  <br>
{/each}
<style>
  b{
    color: blue;
  }
</style>