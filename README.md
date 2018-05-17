# Personal React Native Startup Template

## Tech

- [React Native](https://facebook.github.io/react-native/)
- [Realm](https://realm.io/) (Internal device db storage)

## Core Structure

* `project..`
	* *App.js*
	* *index.js*
	* *package.json*
	* `/android..`
	* `/ios..`
	* `/app..`
		* `screens..`
		* `components..`
		* `config..`
		* `actions..`
		* `reducers..`
		* `lib..`

## Installation

*Ensure to run as `Administrator` mode everywhere to prevent weird problems*

1) Download & Install [Node.js](https://nodejs.org/en/)
2) Download & Install the [Android SDK](https://developer.android.com/studio/)
3) Download & Install [GenyMotion](https://www.genymotion.com/)
4) Add new Virtual Machine on GenyMotion. <br/>***Note:** It is important to keep track of the software API version (higher = newer features supported, lower = compatible with more devices). The API version is required for the right SDK versions (future step)*
5) Map environment variable: `PATH` to `C:\Program Files\Genymobile\Genymotion\tools` or where-ever this genymotion folder is located
6) Map environment variable: `ANDROID_HOME` to `C:\Program Files (x86)\Android\android-sdk` or where-ever the android-sdk folder is installed
7) Start the Android SDK Manager (*C:\Program Files (x86)\Android\android-sdk*) and install:
	* ***Tools** > Android SDK Tools*
	* ***Tools** > Android SDK Platform-tools*
	* ***Tools** > Android SDK Build-tools*
	* ***Android** `[ANDROID_VERSION]` **(API** `[API_VERSION]`**)** > SDK Platform*
	* ***Android** `[ANDROID_VERSION]` **(API** `[API_VERSION]`**)** > Intel x86 Atom_64 System Image*
	* ***Android** `[ANDROID_VERSION]` **(API** `[API_VERSION]`**)** > Intel x86 Atom System Image*
	* ***Extra** > Android Support Repository*
	* ***NOTE:** Ensure the `[API_VERSION]` matches on the `Android SDK Build-tools` & `Android SDK Platform-tools`*
	* ***NOTE:** Ensure the `[API_VERSION]` version also matches that of the version you wish to use on the (GenyMotion) emulator*
	<br/>![SDK Requited Installations](https://i.gyazo.com/831f7ddb89fd9ca5fcc0437fd06be868.png)
7) clone this project repository
8) inside the project folder, run `npm install`
9) run `react-native link realm`
10) done, move to the startup phase

## Startup

1) Ensure the (Genymotion) emulator is started
2) Inside `/demoProject`, run: `react-native run-android`
3) Now the project should start running on the emulator (refer to installation for any issues)

## Deployment

This will come whenever it is production-worthy

## Notes

This works best with GenyMotion as emulator, since Realm may not be supported everywhere.