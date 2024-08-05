import {
  BooleanField,
  CloneButton,
  Create,
  CreateProps,
  Datagrid,
  DateField,
  List,
  ListProps,
  ReferenceField,
  SimpleForm,
  TextField,
  TextInput,
  BooleanInput, DateInput, Edit, ReferenceInput
} from "react-admin";
import React from 'react'


export const TaskCreate = (props: CreateProps) => (
  <Create title="New tag" {...props}>
    <SimpleForm>
            <TextInput source="content" />
            <BooleanInput source="done" />
            <ReferenceInput source="userId" reference="User" />
            <DateInput source="createAt" />
            <DateInput source="updatedAt" />
    </SimpleForm>
  </Create>
);


export const TaskList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="content" />
            <BooleanField source="done" />
            <ReferenceField source="userId" reference="User" >
              <TextField source="username" />
              </ReferenceField>
            <DateField source="createAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export const TaskEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="content" />
            <BooleanInput source="done" />
            <ReferenceInput source="userId" reference="User" />
            <DateInput source="createAt" disabled />
            <DateInput source="updatedAt" disabled/>
        </SimpleForm>
    </Edit>
);
