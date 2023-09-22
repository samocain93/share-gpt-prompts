import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'A prompt is required!'],
  },
  tag: {
    type: String,
    required: [true, 'A tag is required!'],
  },
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;
