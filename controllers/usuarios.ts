import { Request, Response } from 'express';
import User from '../models/usuario';

export const getUsuarios = async (req: Request, res: Response) => {
    const usuarios = await User.findAll();

    res.json({
        msg: usuarios,
    });
};

export const getUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await User.findByPk(id);

    if (!usuario) {
        res.status(404).json({ msg: `No existe un usuario con el id ${id}` });
    }

    res.json(usuario);
};

export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const existeEmail = await User.findOne({
            where: {
                email: body.email,
            },
        });

        if (existeEmail) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email' + body.email,
            });
        }

        //const usuario = await User.create(body);
        User.sequelize
            ?.query(
                'CALL insertUser (:firstname, :lastname, :username, :password, :email, :role_id)',
                { replacements: body }
            )
            .then((v) => console.log('response of store procedure =', v));
        res.json({ msg: 'User added' });
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Hable con el admin',
        });
    }
};

export const putUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const usuario = await User.findByPk(id);
        if (!usuario) {
            return res
                .status(400)
                .json({ msg: 'No existe un usuario con el id ' + id });
        }

        await usuario.update(body);

        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Hable con el admin',
        });
    }
};

export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;

    const usuario = await User.findByPk(id);
    if (!usuario) {
        return res
            .status(400)
            .json({ msg: 'No existe un usuario con el id ' + id });
    }

    //eliminacion logica en la DB
    await usuario.update({ estado: false });

    //eliminacion fisica en la BD
    //await usuario.destroy();

    res.json({
        usuario,
    });
};
