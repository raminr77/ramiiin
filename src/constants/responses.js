/*
 * RULE 1: Add command name (object key) with a capital case.
 * RULE 2: You can send `text` with media: [imageUrl, audioUrl, videoUrl].
 * RULE 3: If you want to show your `command` in the help modal. Set `help` for it.
 * RULE 4: If you don't have any media like [imageUrl, audioUrl, videoUrl], it must be sent `text`.
 * RULE 5: If you set `isDefaultCommand` to your command, the user will see "help" instead of `text`.
 *
 * RESPONSE TEMPLATE:
 * {
 *   text: String,
 *   help: String,
 *   imageUrl: String,
 *   audioUrl: String,
 *   videoUrl: String,
 *   isSender: Boolean,
 *   delay: Number [ default: 500 ],
 *   isDefaultCommand: Boolean [ default: false ]
 * }
 *
 */

export const RESPONSES = {
  AX: {
    help: 'میشه یه عکس از خودت بدی؟',
    imageUrl: './images/images/image-01.jpg'
  },
  AKS: {
    imageUrl: './images/images/image-02.jpg'
  },
  PIC: {
    imageUrl: './images/images/image-03.jpg'
  }
};
