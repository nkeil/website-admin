"use client";

import * as Form from "@radix-ui/react-form";

interface Props {
  handleSubmit: (form: FormData) => void;
  users: { firstName: string; id: string }[];
}

export default function CreatePostForm({ handleSubmit, users }: Props) {
  return (
    <div className="w-96">
      <Form.Root className="w-full" action={handleSubmit}>
        <Form.Field className="FormField" name="authorId">
          <div>
            <Form.Label className="FormLabel">Author</Form.Label>
          </div>
          <Form.Control asChild>
            <select>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.firstName}
                </option>
              ))}
            </select>
          </Form.Control>
        </Form.Field>
        <StringInput name="title" label="Title" />
        <StringInput name="metaTitle" label="Meta Title" />
        <StringInput name="slug" label="Slug" />
        <TextInput name="description" label="Description" />
        <TextInput name="content" label="Content" />
        <Form.Submit asChild>
          <button className="Button" style={{ marginTop: 10 }}>
            Submit Post
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}

interface StringInputProps {
  name: string;
  label: string;
}
function StringInput({ name, label }: StringInputProps) {
  return (
    <Form.Field className="FormField" name={name}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Form.Label className="FormLabel">{label}</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter a valid input
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          Please provide a valid input
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className="Input" type="text" required />
      </Form.Control>
    </Form.Field>
  );
}

interface TextInputProps {
  name: string;
  label: string;
}
function TextInput({ name, label }: TextInputProps) {
  return (
    <Form.Field className="FormField" name={name}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Form.Label className="FormLabel">{label}</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter a valid input
        </Form.Message>
      </div>
      <Form.Control asChild>
        <textarea className="Textarea" required />
      </Form.Control>
    </Form.Field>
  );
}
