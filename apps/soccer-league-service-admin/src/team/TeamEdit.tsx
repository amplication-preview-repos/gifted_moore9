import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TeamEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Country" source="country" />
        <NumberInput step={1} label="FoundedYear" source="foundedYear" />
        <TextInput label="Name" source="name" />
        <TextInput label="Stadium" source="stadium" />
      </SimpleForm>
    </Edit>
  );
};
