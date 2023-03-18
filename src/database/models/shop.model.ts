import { Schema, model } from 'mongoose'

import { IShopSettings } from '../../types/shop/settings.type'

export const shopSchema = new Schema<IShopSettings>({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  shopName: { type: String },
  shopAddress: { type: Schema.Types.ObjectId, ref: 'Address' },
  shopOpeningHours: {
    daysOfWeek: [{ label: { type: String }, value: { type: String } }],
    hours: { starts: { type: String }, ends: { type: String } },
  },
  deliveryFees: [{ upToKm: { type: Number }, price: { type: Number } }],
  items: [{ type: Schema.Types.ObjectId, ref: 'MenuItem' }],
  categories: [{ type: Schema.Types.ObjectId, ref: 'ItemCategory' }],
  additional: [{ type: Schema.Types.ObjectId, ref: 'Additional' }],
})

const ShopModel = model<IShopSettings>('Shop', shopSchema)

export default ShopModel