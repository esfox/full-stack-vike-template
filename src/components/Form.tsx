/// <reference types="@kitajs/html/htmx.d.ts" />
import '@kitajs/html/register';

const users = [
  {
    id: 1,
    name: 'User 1',
  },
  {
    id: 2,
    name: 'User 2',
  },
  {
    id: 3,
    name: 'User 3',
  },
];

export function Form() {
  return (
    <>
      <form
        hx-post="/api/form"
        hx-indicator="#loading"
        hx-target="#result"
        class="grid grid-cols-1 gap-4 p-6"
      >
        <div class="form-control max-w-xs">
          <div class="label">
            <label class="label-text" for="title">
              Title
            </label>
          </div>
          <input type="text" class="input input-bordered block" id="title" name="title" />
        </div>
        <div class="form-control max-w-xs">
          <div class="label">
            <label class="label-text" for="body">
              Body
            </label>
          </div>
          <textarea class="textarea textarea-bordered block" id="body" name="body" />
        </div>
        <div class="form-control max-w-xs">
          <div class="label">
            <label class="label-text" for="userId">
              User ID
            </label>
          </div>
          <select class="input input-bordered block" id="userId" name="userId">
            {users.map(user => (
              <option value={user.id.toString()} safe>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <button class="w-20 bg-blue-300 text-center rounded-lg p-3" type="submit">
          Send
        </button>
        <span id="loading" class="htmx-indicator">
          Submitting...
        </span>
      </form>
      <div id="result" class="px-6"></div>
    </>
  );
}
