<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import * as Table from "$lib/components/ui/table";
  import { cn } from "$lib/utils.js";
  import CaretDoubleLeft from "phosphor-svelte/lib/CaretDoubleLeft";
  import CaretDoubleRight from "phosphor-svelte/lib/CaretDoubleRight";
  import CaretLeft from "phosphor-svelte/lib/CaretLeft";
  import CaretRight from "phosphor-svelte/lib/CaretRight";
  import { NaughtyOrNice } from "./state.svelte.js";
  let { data } = $props();

  const list = new NaughtyOrNice(data.naughtyNiceList);

  let name = $state("");

  function addChild() {
    if (!name) return;
    list.addPerson(name);
    name = "";
  }

  function isNaughty(tally: number) {
    return tally < 0;
  }
</script>

<div class="flex flex-col items-start gap-4 lg:flex-row">
  <Card.Root class="w-full">
    <Card.Header>
      <Card.Title>Naughty or Nice</Card.Title>
      <Card.Description>Keep track of who has been naughty and nice</Card.Description>
    </Card.Header>
    <Card.Content>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Score</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {#each list.persons as child (child.id)}
            {@const naughty = isNaughty(child.tally)}
            <Table.Row>
              <Table.Cell class="font-medium">
                <span>{child.name}</span>
              </Table.Cell>
              <Table.Cell class={cn(naughty ? "text-red-500" : "text-green-500")}>
                <span>{child.tally}</span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant={naughty ? "destructive" : "success"}>
                  {naughty ? "Naughty" : "Nice"}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <div class="flex w-full items-center justify-end gap-4">
                  <Button variant="destructive" onclick={() => list.updateTally(child.id, -1)}
                    >-1</Button
                  >
                  <Button variant="success" onclick={() => list.updateTally(child.id, 1)}>+1</Button
                  >
                </div>
              </Table.Cell>
            </Table.Row>
          {/each}
        </Table.Body>
      </Table.Root>
      <div class="flex items-center justify-between px-2 pt-4">
        <div class="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {list.page} of {list.totalPages}
        </div>
        <div class="flex items-center space-x-2">
          <Button
            variant="outline"
            class="hidden h-8 w-8 p-0 lg:flex"
            onclick={list.firstPage}
            disabled={list.page === 1}
          >
            <span class="sr-only">Go to first page</span>
            <CaretDoubleLeft class="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            class="h-8 w-8 p-0"
            onclick={list.prevPage}
            disabled={list.page === 1}
          >
            <span class="sr-only">Go to previous page</span>
            <CaretLeft class="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            class="h-8 w-8 p-0"
            onclick={list.nextPage}
            disabled={list.page === list.totalPages}
          >
            <span class="sr-only">Go to next page</span>
            <CaretRight class="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            class="hidden h-8 w-8 p-0 lg:flex"
            onclick={list.lastPage}
            disabled={list.page === list.totalPages}
          >
            <span class="sr-only">Go to last page</span>
            <CaretDoubleRight class="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card.Content>
  </Card.Root>
  <Card.Root class="min-w-[340px]">
    <Card.Header>
      <Card.Title>Add new child</Card.Title>
      <Card.Description>Keep track of who has been naughty and nice</Card.Description>
    </Card.Header>
    <Card.Content>
      <form
        onsubmit={(e) => {
          e.preventDefault();
          addChild();
        }}
      >
        <div class="flex flex-col gap-2">
          <Label for="name">Name</Label>
          <Input id="name" bind:value={name} required autocomplete="off" />
        </div>
        <Button class="mt-4" type="submit">Add</Button>
      </form>
    </Card.Content>
  </Card.Root>
</div>
