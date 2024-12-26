import EditProfile from '../../components/EditProfile';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/Tabs';
import useForm from '../../hooks/useForm';
import useImageHandler from '../../hooks/useImageHandler';

const SettingPage = () => {
  const { image, preview, handleImageChange } = useImageHandler();
  const { values, onInputChange } = useForm({
    value: {
      yourName: '',
      userName: '',
      email: '',
      dateOfBirth: '',
      password: '',
      presentAddress: '',
      permanentAddress: '',
      city: '',
      postalCode: '',
      country: '',
    },
    error: {
      yourName: [],
      userName: [],
      email: [],
      dateOfBirth: [],
      password: [],
      presentAddress: [],
      permanentAddress: [],
      city: [],
      postalCode: [],
      country: [],
    },
  });

  const editHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <section className="bg-card centered my-[30px] mx-[40px] rounded-[25px] bg-card">
      <Tabs defaultValue="edit-profile" className="pt-[30px]">
        <TabsList className="grid grid-cols-3 desktop:flex">
          <TabsTrigger value="edit-profile">Edit Profile</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <TabsContent value="edit-profile">
          <EditProfile
            image={image}
            preview={preview as any}
            handleImageChange={handleImageChange}
            onChange={onInputChange}
            values={values}
            submitHandler={editHandler}
          />
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </section>
  );
};

export default SettingPage;
