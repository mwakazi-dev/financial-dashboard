import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/Tabs';
import EditProfile from '../../components/EditProfile';
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
    <section className="mobile:m-[25px] mobile:rounded-[15px] mobile:px-[20px] mobile:py-[22px] desktop:mx-[40px] desktop:my-[30px] desktop:px-[46px] desktop:py-[30px] bg-card h-fit min-h-[700px]">
      <Tabs defaultValue="edit-profile">
        <TabsList className="grid grid-cols-3 mobile:gap-x-[42px] desktop:flex">
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
