<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { CHALLENGES, challengeNumbers } from "$lib/data/levels";
  import { CaretLeft, CaretRight } from "phosphor-svelte";

  type Props = {
    path: string;
  };

  let { path } = $props<Props>();

  const currentChallenge = $derived(Number(path.split("/")[2]));
  const nextChallenge = $derived(challengeNumbers[challengeNumbers.indexOf(currentChallenge) + 1]);
  const prevChallenge = $derived(challengeNumbers[challengeNumbers.indexOf(currentChallenge) - 1]);
  const title = $derived(getTitle());

  function getTitle() {
    return `Challenge ${currentChallenge} - ${
      CHALLENGES.find((c) => c.id === currentChallenge)?.title
    }`;
  }
</script>

<div class="flex items-center justify-between py-16">
  {#if currentChallenge === challengeNumbers[0]}
    <Button size="icon" variant="outline" disabled>
      <CaretLeft class="size-4" />
    </Button>
  {:else}
    <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
        <Button
          builders={[builder]}
          size="icon"
          variant="outline"
          href="/challenges/{prevChallenge}"
        >
          <CaretLeft class="size-4" />
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content align="start">Previous challenge</Tooltip.Content>
    </Tooltip.Root>
  {/if}

  <h2 class="text-center text-lg font-medium tracking-tight lg:text-3xl">
    {title}
  </h2>
  {#if currentChallenge === challengeNumbers[challengeNumbers.length - 1]}
    <Button size="icon" variant="outline" disabled>
      <CaretRight class="size-4" />
    </Button>
  {:else}
    <Tooltip.Root openDelay={200}>
      <Tooltip.Trigger asChild let:builder>
        <Button
          builders={[builder]}
          size="icon"
          variant="outline"
          href="/challenges/{nextChallenge}"
        >
          <CaretRight class="size-4" />
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content align="end">Next challenge</Tooltip.Content>
    </Tooltip.Root>
  {/if}
</div>
