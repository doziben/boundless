//will hold user details that will be passed from firebase
//photourl, id, name, (_app.tsx)
//will hold setter function for setting user

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type _user = {
  uid: string | null;
  name: string | null;
  email: string | null;
  photoUrl: string | null;
  newUser: boolean | null;
};

type _state = {
  auth: boolean;
  user?: _user | null;
};

const initialState: _state = {
  auth: false,
  user: null,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setUser: (state: _state, action: PayloadAction<_user>) => {
      return (state = { auth: true, user: action.payload });
    },
    logOut: (state: _state) => {
      return (state = { auth: false, user: null });
    },
  },
});

const appActions = appSlice.actions;

export { appActions, appSlice };
