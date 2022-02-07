<script lang="ts">
  export let value: string | number;
</script>

<option {value}>
  <slot />
</option>
