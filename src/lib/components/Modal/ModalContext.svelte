<script lang="ts">
  import { setContext } from "svelte";
  import { fade } from "svelte/transition";

  import Button from "../Button.svelte";
  import { ModalContext } from "./context";

  let modal:
    | {
        title: string;
        message: string;
        finish: (result: boolean) => void;
        buttons: {
          confirmText: string;
          rejectText: string;
        };
      }
    | undefined = undefined;

  const context: typeof ModalContext = {
    prompt: async ({
      title,
      message,
      confirmText = "Ok",
      rejectText = "Cancel",
    }: {
      title: string;
      message: string;
      confirmText: string;
      rejectText: string;
    }): Promise<boolean> => {
      let response: (response: boolean) => void;
      const responsePromise = new Promise<boolean>((resolve) => {
        response = resolve;
      });
      modal = {
        title,
        message,
        buttons: {
          confirmText,
          rejectText,
        },
        finish: (result: boolean) => {
          modal = undefined;
          response(result);
        },
      };
      return responsePromise;
    },
  };

  setContext(ModalContext, context);
</script>

<slot />

{#if modal}
  <div class="modal" transition:fade>
    <div class="backdrop">
      <div class="content">
        <div class="title">{modal.title}</div>
        <div class="message">{modal.message}</div>
        <div class="buttons">
          <button class="confirm" on:click={() => modal.finish(true)}>
            {modal.buttons.confirmText}
          </button>
          <button class="reject" on:click={() => modal.finish(false)}>
            {modal.buttons.rejectText}
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-flow: column nowrap;
    place-content: center;
    place-items: center;
  }

  .backdrop {
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);

    display: flex;
    flex-flow: column nowrap;
    place-content: center;
    place-items: center;
  }

  .content {
    color: rgb(238, 238, 238);
    background-color: black;
    border-radius: 8px;
    padding: 30px;
    border: 2px solid grey;
  }

  .content .title {
    font-size: 1.5em;
    margin-bottom: 20px;
  }

  .content .message {
    font-size: 1em;
    margin-bottom: 20px;
  }

  .buttons {
    display: flex;
    flex-flow: row nowrap;
    place-content: flex-end;
    place-items: center;
    gap: 10px;
  }

  button {
    padding: 4px 12px;
    font-size: 1em;

    border-radius: 5px;
    outline: none;
    border: none;

    background: grey;
    color: white;
    user-select: none;
    cursor: pointer;
  }

  button:hover {
    background: rgb(255, 255, 255, 0.7);
  }
</style>
