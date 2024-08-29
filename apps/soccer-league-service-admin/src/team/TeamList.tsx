import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TeamList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Teams"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="FoundedYear" source="foundedYear" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Stadium" source="stadium" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
