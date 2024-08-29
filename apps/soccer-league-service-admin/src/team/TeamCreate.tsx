import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TeamCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Country" source="country" />
        <NumberInput step={1} label="FoundedYear" source="foundedYear" />
        <TextInput label="Name" source="name" />
        <TextInput label="Stadium" source="stadium" />
      </SimpleForm>
    </Create>
  );
};
