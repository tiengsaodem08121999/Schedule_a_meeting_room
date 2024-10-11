<script>
    import { createEventDispatcher } from "svelte";
    export let title = "";
    export let room = "";
    export let startDate = "";
    export let startTime = "";
    export let endDate = "";
    export let endTime = "";
    export let isEdit = false;
    export let showModal = false;
  
    const rooms = ["Room A", "Room B", "Room C"];
    const dispatch = createEventDispatcher();
  
    function submitForm() {
      const start = `${startDate}T${startTime}`;
      const end = `${endDate}T${endTime}`;
      dispatch("submit", { title, room, start, end });
      hideModal();
    }
  
    function hideModal() {
      dispatch("close");
    }
  </script>
  
  <!-- Modal structure -->
  <div
    class="modal fade"
    id="eventModal"
    tabindex="-1"
    aria-labelledby="eventModalLabel"
    aria-hidden="true"
    class:show={showModal}
    style:display={showModal ? 'block' : 'none'}
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="eventModalLabel">{isEdit ? "Edit Event" : "Add Event"}</h5>
          <button type="button" class="btn-close" on:click={hideModal} aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
                <div class="row">
                    <div class="col-3">
                        <label for="eventName" class="form-label">Title:</label>
                    </div>
                    <div class="col-9">
                        <input type="text" class="form-control" id="eventName" bind:value={title} />
                    </div>
                </div>
            </div>
            <div class="mb-3">
            <div class="row">
               <div class="col-3">
                <label for="eventRoom" class="form-label">Room:</label>
               </div> 
               <div class="col-9">
                <select class="form-select" id="eventRoom" bind:value={room}>
                    <option value="" disabled selected>Select a room</option>
                    {#each rooms as room}
                      <option value={room}>{room}</option>
                    {/each}
                  </select>
               </div>
            </div>
            </div>
            <div class="mb-3">
                <div class="row">
                    <div class="col-3">
                        <label class="form-label">Start Date:</label>
                    </div>
                    <div class="col-9">
                        <div class="input-group">
                            <input type="date" class="form-control" bind:value={startDate} />
                            <input type="time" class="form-control" bind:value={startTime} />
                          </div>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="row">
                    <div class="col-3">
                        <label class="form-label">End Date:</label>
                    </div>
                    <div class="col-9">
                        <div class="input-group">
                            <input type="date" class="form-control" bind:value={endDate} />
                            <input type="time" class="form-control" bind:value={endTime} />
                          </div>
                    </div>
                </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" on:click={hideModal}>Cancel</button>
          <button type="button" class="btn btn-primary" on:click={submitForm}>{isEdit ? "Save Changes" : "Add Event"}</button>
        </div>
      </div>
    </div>
  </div>
  
  <style>
    .modal.show {
      display: block !important;
    }
  </style>
  