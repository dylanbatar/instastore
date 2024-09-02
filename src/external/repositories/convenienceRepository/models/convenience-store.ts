// src/models/Store.ts
import { Model, DataTypes, Optional } from 'sequelize';

import { sequelize } from '../config/database';

interface StoreAttributes {
  storeId: number;
  storeName: string;
  isOpen: boolean;
  coordinates: {
    type: string;
    coordinates: [number, number];
  };
  indexLocation: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface StoreCreationAttributes extends Optional<StoreAttributes, 'storeId'> {}

class Store extends Model<StoreAttributes, StoreCreationAttributes> implements StoreAttributes {
  public storeId!: number;
  public storeName!: string;
  public isOpen!: boolean;
  public coordinates!: { type: string; coordinates: [number, number] };
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public indexLocation!: string;
}

Store.init(
  {
    storeId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    storeName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isOpen: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    coordinates: {
      type: DataTypes.GEOMETRY('POINT'),
      allowNull: false
    },
    indexLocation: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'stores',
    timestamps: true
  }
);

export default Store;
