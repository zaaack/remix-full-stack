import { Datagrid, DateField, List, TextField, DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <DateField source="createAt"  />
            <DateField source="updatedAt"  />
        </Datagrid>
    </List>
);

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="username" />
            <DateInput source="createAt" disabled />
            <DateInput source="updatedAt" disabled />
        </SimpleForm>
    </Edit>
);
