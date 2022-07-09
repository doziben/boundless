//Additional Stuff Section
//props.onSubmit will take in the entered info

import Card from "../ui/card";

interface formData {
  jobTitle?: string;
  //list all things needed in the createJob form
}

export type _formProps = {
  onSubmit: (data: formData) => void;
  onCancel: React.MouseEventHandler;
};

const AdditionalStuff = (props: _formProps) => {
  return <Card>{}</Card>;
};

export default AdditionalStuff;
