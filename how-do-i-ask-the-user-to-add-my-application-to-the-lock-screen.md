---
title: How do I ask the user to add my application to the lock screen?
authors:
- thebeebs
intro: '''For background task with timers to launch you...\'''''
types:
- shorts
categories:
- win8at8
published: 2012/08/03 12:00:00
updated: 2012/08/03 12:00:00
status: archived
---
















# # # # For background task with timers to launch you must ensure that your app is added to the lock screen. You can request to be added as a lock screen application by adding the following code to your project:

   <div id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:9bfcba99-2f9c-45b0-82d9-23c02df81211" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px"><pre class="brush: javascript;">var Background = Windows.ApplicationModel.Background;

var promise = Background.BackgroundExecutionManager.requestAccessAsync().then(
    function(result) {
        switch (result) {
            case Background.BackgroundAccessStatus.denied:
                // Background activity and updates for this app are disabled by the user. 
                break;

            case Background.BackgroundAccessStatus.allowedWithAlwaysOnRealTimeConnectivity:
                // Added to list of background apps.
                // Set up background tasks; can use the network connectivity broker.
                break;

            case Background.BackgroundAccessStatus.allowedMayUseActiveRealTimeConnectivity:
                // Added to list of background apps.
                // Set up background tasks; cannot use the network connectivity broker.
                break;

            case Background.BackgroundAccessStatus.unspecified:
                // The user didn't explicitly disable or enable access and updates. 
                break;
        }
    });</pre></div>

You can also check to see if your app is a lock screen app by using the following code: 

  <div id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:b17038a3-e998-49b7-b04d-452bf450c62f" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px"><pre class="brush: javascript;">var Background = Windows.ApplicationModel.Background;

var result = Background.BackgroundApplications.getAccessStatus();
switch (result) {
    case Background.BackgroundAccessStatus.denied:
        // Disabled by the user.
        // Cannot display on the lock screen. 
        break;

    case Background.BackgroundAccessStatus.allowedWithAlwaysOnRealTimeConnectivity:
        // Added to list of background applications.
        // Can display on the lock screen.
        // Can set up background tasks and use the network connectivity broker.
        break;

    case Background.BackgroundAccessStatus.allowedMayUseActiveRealTimeConnectivity:
        // Added to list of background applications.
        // Can display on the lock screen.
        // Can set up background tasks but cannot use the network connectivity broker.
        break;

    case Background.BackgroundAccessStatus.unspecified:
        // The user didn't explicitly disable or enable.
        break;
    }</pre></div>