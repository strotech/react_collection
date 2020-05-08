UBUNTU
========================
To run android studio
---------------------------
add the below entry to bashrc
export ANDROID_HOME='/usr/local/android-studio/bin'

then invoke the studio by running studio.sh from anywhere

To list and run the emulators
---------------------------
cd ~/Android/Sdk/tools/bin
./avdmanager list avd
cd ~/Android/Sdk/emulator
./emulator -avd NAME_OF_YOUR_DEVICE
./emulator -avd Pixel_2_API_29
./emulator -avd Nexus_4_API_22

RUN THE APP
=======================
"react-native start" will start the packager
"react-native run-android" will deploy and start the app in the emulator/device