import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TeamShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="FoundedYear" source="foundedYear" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Stadium" source="stadium" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
