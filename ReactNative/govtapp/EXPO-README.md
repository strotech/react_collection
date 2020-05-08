govtapp@expo123

as a workaround for a new project- you can run expo credentials:manager -p android and for the desired project (it should automatically suggest the current project directory) select Update Upload Keystore, then select Let Expo handle the process. It should say - Updated Keystore successfully, then you should select Go back to experience overview. (At this point, I suggest choosing the option to Download Keystore from the Expo servers, and back it up to a safe location so you have those credentials saved)

This will create a new keystore and save it onto our servers, and you should then be able to run expo build:android to build binaries using those credentials. All the expo fetch:android:[] commands will also work.

This is just a workaround to be able to generate android credentials and use them for subsequent builds, we are still investigating the issue