# My To-Do List

A simple mobile to-do list app built with React Native and Expo.

## Features

- Add tasks with a text input
- Mark tasks as complete with a tap (strikethrough and faded effect)
- Delete tasks
- **Add Random Task** - pulls a random activity suggestion from the [Bored API](https://bored-api.appbrewery.com/random) and adds it straight to your list
- **Log Time** - select a saved task and log how long it took, submitted via POST request
- Tasks persist between app sessions using `AsyncStorage`
- About screen and Log Time screen accessible via in-app navigation

## APIs Used

- **GET** - [Bored API](https://bored-api.appbrewery.com/random) - fetches a random activity suggestion
- **POST** - [dummyjson.com/posts/add](https://dummyjson.com/posts/add) - logs time spent on a task
- **DELETE** - [dummyjson.com/posts/1](https://dummyjson.com/posts/1) - logs task deletion

## Tech Stack

- React Native
- Expo (SDK 54)
- TypeScript
- React Navigation (native stack)
- `@react-native-async-storage/async-storage` for local data persistence

## Accessibility

All colour combinations meet WCAG AA contrast requirements (minimum 4.5:1 for normal text). All interactive touch targets meet the recommended minimum size of 44x44pt.

## Running the Project

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npx expo start
   ```

3. Open the app:
   - Scan the QR code with the **Expo Go** app on your phone
   - Press `a` to open in Android Studio
   - Or open `localhost:8081` in your browser

   Note: the "Add Random Task" feature does not work on web due to a CORS restriction on the Bored API. This only affects the browser version, not mobile.

## Testing

### App functionality
- Add a task manually and confirm it appears in the list
- Add a random task via the Bored API and confirm it appears in the list
- Tap a task to mark it as complete - text should appear faded with a strikethrough
- Tap a completed task again to unmark it
- Delete a task and confirm it is removed from the list
- Submit an empty task and confirm the error message appears
- Close the app fully and reopen it - tasks should still be there (AsyncStorage persistence)
- Navigate to the About screen and back
- Navigate to the Log Time screen and back

### Log Time screen
- Select a task from the list and confirm it highlights
- Enter a number of minutes and tap Submit Log - confirm the success message appears
- Try submitting with no task selected - confirm the error message appears
- Try submitting with no minutes entered - confirm the error message appears

### API calls (browser Network tab)
To verify API calls are firing correctly:

1. Run `npx expo start --web` and open `localhost:8081`
2. Open browser dev tools (`F12`) and go to the **Network** tab
3. Add a random task - you should see a GET request to `bored-api.appbrewery.com`
4. Delete a task - you should see a DELETE fetch request with status `200` and a preflight with status `204`
5. Navigate to Log Time, select a task, enter minutes and submit - you should see a POST request to `dummyjson.com`

## A Note on Expo SDK Version

This project is built on **Expo SDK 54**. Expo Go only supports the latest SDK version at any given time. If you run into a "Project is incompatible with this version of Expo Go" error, it likely means your installed Expo Go app is on a different SDK version than this project (you can confirm this in the Expo Go app settings under **App Info**).

To fix this, you can either:
- Update Expo Go to the latest version, or
- Downgrade this project to match your Expo Go version:

  ```bash
  npx expo install expo@<your-sdk-version>
  npx expo install --fix
  ```

## Project Structure

```
App.tsx                    # Navigation setup
screens/
  HomeScreen.tsx            # Main to-do list screen
  AboutScreen.tsx           # About screen
  LogTimeScreen.tsx         # Log time spent on a task
components/
  TaskCard.tsx              # Individual task row component
```